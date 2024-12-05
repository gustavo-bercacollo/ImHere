import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#6B6B6B',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 50
  },
  counter: {
    color: '#e2e2e2',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  calendar: {
    backgroundColor: 'transparent'
  },
  eventDateInput: {
    color: '#6B6B6B',
    height: 50,
    fontSize: 16,
    marginTop: -10
  }
})